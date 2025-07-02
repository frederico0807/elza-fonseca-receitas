
import React, { useState, useRef, useEffect, useCallback } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

const LazyImage = React.memo(({ src, alt, className, placeholder }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleLoad = useCallback(() => {
    console.log(`✅ Imagem carregada com sucesso: ${src}`);
    setIsLoaded(true);
  }, [src]);

  const handleError = useCallback(() => {
    console.error(`❌ Erro ao carregar imagem: ${src}`);
    setHasError(true);
  }, [src]);

  useEffect(() => {
    if (!imgRef.current || isInView) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log(`👁️ Imagem entrou em vista: ${src}`);
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [isInView, src]);

  // Fallback para URLs de placeholder se houver erro
  const getFallbackImage = () => {
    return 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop';
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden bg-gray-100 ${className}`}>
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
          style={{ 
            willChange: isLoaded ? 'auto' : 'opacity',
            contentVisibility: 'auto'
          }}
        />
      )}
      
      {/* Fallback para erro de carregamento */}
      {hasError && (
        <img
          src={getFallbackImage()}
          alt={alt}
          className="w-full h-full object-cover opacity-80"
          onLoad={() => {
            console.log(`🔄 Fallback image carregada para: ${alt}`);
            setIsLoaded(true);
          }}
        />
      )}
      
      {/* Loading state */}
      {(!isInView || (!isLoaded && !hasError)) && (
        <div className="absolute inset-0 w-full h-full bg-gray-200 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-rose-400 rounded-full animate-spin"></div>
            <span className="text-xs text-gray-500">Carregando...</span>
          </div>
        </div>
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;
