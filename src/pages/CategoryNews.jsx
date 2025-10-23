import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    const news = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        if (id == 0) {
            setCategoryNews(news);
            return;
        }
        if (id == 1) {
            const breakingNews = news.filter(data => data.others.is_today_pick);
            setCategoryNews(breakingNews);
            return;
        }
        const filteredNews = news.filter(data => data.category_id == id);
        setCategoryNews(filteredNews);
    }, [news, id])

    return (
        <div>
            <h2 className="font-bold mb-5">
                Total <span className="text-secondary">{categoryNews.length}</span> news
                Found
            </h2>

            <div className="grid grid-cols-1 gap-5">
                {categoryNews.map((news) => (
                    <NewsCard key={news.id} news={news}></NewsCard>
                ))}
            </div>
        </div>
    );
};

export default CategoryNews;