import React, { useEffect, useRef, useState } from 'react';

interface InfiniteScrollProps { 
  loadMore: () => void; 
  hasMore: boolean ; 
  loading: boolean; 
  children: React.ReactNode; 
} 

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ 
  loadMore, 
  hasMore,   
  loading,
  children, 
}) => { 
  const [loadingMore, setLoadingMore] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => { 
    const currentObserver = new IntersectionObserver( 
      (entries) => { 
        const target = entries[0];
        if (target.isIntersecting && hasMore && !loading && !loadingMore) {
          setLoadingMore(true); 
          loadMore();
          setTimeout(() => setLoadingMore(false), 1000);
        }
      },
      { threshold: 1.0 } 
    );

    if (loadingRef.current) {
      currentObserver.observe(loadingRef.current); 
    } 
    
    observer.current = currentObserver; 

    return () => {  
      if (observer.current) { 
        observer.current.disconnect(); 
      } 
    }; 
  }, [hasMore, loading, loadMore, loadingMore]);

  return (
    <div className="w-full">
      {children}
      
      {hasMore && (
        <div ref={loadingRef} className="w-full py-4 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-gray-400 loading-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-gray-400 loading-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-gray-400 loading-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      )}
    </div>
  );
};