document.querySelectorAll('#Relationships article').forEach(article => {
    article.addEventListener('mouseleave', () => {
        article.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
