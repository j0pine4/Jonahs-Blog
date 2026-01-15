import type { Article, ArticleFilterParams, Category, GallerySection, ImageItem, KeyTerm, PrimaryContent, QuestionAnswer, ShortSummary } from "~/models/Article";

const useArticle = () => {

    const getArticleList = (params?: ArticleFilterParams) => {
        const url = '/api/article';
        return $fetch<Article[]>(url, {
            params: params
        })
    }
    const getArticleDetails = (article_id: string) => {
        const url = `/api/article/${article_id}`;
        return $fetch<Article>(url)
    }

    const getCategoryList = () => {
        const url = '/api/category';
        return $fetch<Category[]>(url)
    }

    const getCategoriesForArticle = (article_id: string) => {
        const url = `/api/article/${article_id}/categories`;
        return $fetch<Category[]>(url)
    }

    const getPrimaryContentForArticle = (article_id: string) => {
        const url = `/api/article/${article_id}/primary-content`;
        return $fetch<PrimaryContent>(url)
    }

    const getShortSummaryForArticle = (article_id: string) => {
        const url = `/api/article/${article_id}/summary`;
        return $fetch<ShortSummary>(url)
    }

    const getGalleryForArticle = (article_id: string) => {
        const url = `/api/article/${article_id}/gallery`;
        return $fetch<ImageItem[]>(url)
    }

    const getQuestionsForArticle = (article_id: string) => {
        const url = `/api/article/${article_id}/questions`;
        return $fetch<QuestionAnswer[]>(url)
    }

    const getKeyTermsForArticle = (article_id: string) => {
        const url = `/api/article/${article_id}/terms`;
        return $fetch<KeyTerm[]>(url)
    }

    return {
        getArticleList,
        getArticleDetails,
        getCategoryList,
        getCategoriesForArticle,
        getPrimaryContentForArticle,
        getShortSummaryForArticle,
        getGalleryForArticle,
        getQuestionsForArticle,
        getKeyTermsForArticle
    }
}

export default useArticle;