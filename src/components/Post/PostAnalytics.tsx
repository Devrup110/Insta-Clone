import React from 'react';
import { BarChart, Activity, Users, Eye } from 'lucide-react';

interface PostAnalyticsProps {
  isOpen: boolean;
  onClose: () => void;
  postId: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  reachData: number[];
}

export const PostAnalytics = ({ isOpen, onClose, postId, views, likes, comments, shares, saves, reachData }: PostAnalyticsProps) => {
  if (!isOpen) return null;

  // Calculate engagement rate
  const engagementRate = ((likes + comments + shares + saves) / views * 100).toFixed(2);
  
  // Calculate day labels for the chart (last 7 days)
  const dayLabels = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center p-4 border-b dark:border-dark-border">
          <div className="flex items-center">
            <BarChart className="mr-2 text-blue-500" />
            <h2 className="text-xl font-semibold dark:text-dark-text">Post Analytics</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            &times;
          </button>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-dark-bg p-3 rounded-lg">
              <div className="flex items-center text-blue-500 mb-1">
                <Eye size={18} className="mr-1" />
                <span className="text-sm font-medium">Views</span>
              </div>
              <p className="text-2xl font-bold dark:text-dark-text">{views.toLocaleString()}</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-dark-bg p-3 rounded-lg">
              <div className="flex items-center text-green-500 mb-1">
                <Activity size={18} className="mr-1" />
                <span className="text-sm font-medium">Engagement</span>
              </div>
              <p className="text-2xl font-bold dark:text-dark-text">{engagementRate}%</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2 dark:text-dark-text">Reach Over Time</h3>
            <div className="h-32 flex items-end justify-between">
              {reachData.map((value, index) => {
                const height = `${(value / Math.max(...reachData)) * 100}%`;
                return (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div className="w-full px-1">
                      <div 
                        className="bg-blue-500 rounded-t" 
                        style={{ height, minHeight: '4px' }}
                      ></div>
                    </div>
                    <span className="text-xs mt-1 dark:text-dark-text-secondary">{dayLabels[index]}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-50 dark:bg-dark-bg p-2 rounded-lg text-center">
              <p className="text-lg font-bold dark:text-dark-text">{likes}</p>
              <p className="text-xs text-gray-500 dark:text-dark-text-secondary">Likes</p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-bg p-2 rounded-lg text-center">
              <p className="text-lg font-bold dark:text-dark-text">{comments}</p>
              <p className="text-xs text-gray-500 dark:text-dark-text-secondary">Comments</p>
            </div>
            <div className="bg-gray-50 dark:bg-dark-bg p-2 rounded-lg text-center">
              <p className="text-lg font-bold dark:text-dark-text">{shares}</p>
              <p className="text-xs text-gray-500 dark:text-dark-text-secondary">Shares</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};