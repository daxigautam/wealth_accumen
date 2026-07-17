import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

export async function GET() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL('https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms');
    
    const fallbackImages = [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80"
    ];

    // We only need the top 4 news items for the UI
    const newsItems = feed.items.slice(0, 4).map((item, index) => {
      // Economic Times sometimes provides images in enclosure or media:content.
      let img = item.enclosure?.url;
      if (!img) {
        // Fallback to stock finance images
        img = fallbackImages[index % fallbackImages.length];
      }

      return {
        title: item.title,
        link: item.link,
        date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent',
        category: 'Market News',
        img: img
      };
    });

    return NextResponse.json(newsItems);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}
