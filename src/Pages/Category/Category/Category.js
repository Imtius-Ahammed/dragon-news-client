import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummayCard/NewsSummaryCard';

const Category = () => {
  const CategoryNews =useLoaderData();
  return (
    <div>
      <h3>This is Category has news  {CategoryNews.length}</h3>
      {
        CategoryNews.map(news=> <NewsSummaryCard 
          key={news.id}
          news={news}
        
        ></NewsSummaryCard>)
      }
    </div>
  );
};

export default Category;