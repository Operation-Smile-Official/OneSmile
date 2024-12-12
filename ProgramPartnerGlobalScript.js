(function() {
    function styleNewsBanner() {
        const styles = document.createElement('style');
        styles.textContent = `
            .rte-webpart .ck-content h4 {
                background: #003087 !important;
                padding: 12px 24px !important;
                margin: 0 auto 24px auto !important;
                font-size: 14px !important;
                line-height: 1.4 !important;
                font-family: 'Inter', sans-serif !important;
                color: white !important;
                display: inline-block !important;
                width: 90% !important;
                max-width: 1100px !important;
                border-radius: 6px !important;
                box-shadow: 0 2px 8px rgba(0,48,135,0.15) !important;
            }

            /* Link styling within the banner */
            .rte-webpart .ck-content h4 a,
            .rte-webpart .ck-content h4 a:visited {
                color: #b8d1ff !important;
                text-decoration: underline !important;
                transition: all 0.2s ease !important;
                text-shadow: 0 0 8px rgba(184, 209, 255, 0.3) !important;
            }

            .rte-webpart .ck-content h4 a:hover {
                color: #ffffff !important;
                text-shadow: 0 0 12px rgba(255, 255, 255, 0.5) !important;
            }
        `;
        
        if (!document.querySelector('#newsBannerStyles')) {
            styles.id = 'newsBannerStyles';
            document.head.appendChild(styles);
        }
    }

    styleNewsBanner();
})();