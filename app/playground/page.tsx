'use client'

import React, { useEffect } from 'react';

declare global {
  interface Window {
    TradingView: any;
  }
}

const Page = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        container_id: 'chart-container',
        autosize: false,
        width: '100%',
        height: 800,
        symbol: 'AAPL',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        save_image: false,
        details: true,
        hotlist: true,
        calendar: true,
        show_popup_button: true,
        popup_width: '1000',
        popup_height: '650',
      });
    };
    document.body.appendChild(script);
  }, []);
  
  return (
    <div>
      <div id="chart-container" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
}

export default Page;