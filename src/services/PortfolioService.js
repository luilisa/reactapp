
import axios from 'axios';

const PORTFOLIO_API_BASE_URL = "http://localhost:8080/api/v1/portfolios";

class PortfolioService {
    getPortfolios() {
        return axios.get("http://localhost:8080/api/v1/portfolios?expand");
    }

    createPortfolio(portfolio, userId) {
        return axios.post("http://localhost:8080/api/v1/portfolios/users/" + userId, portfolio);
    }

    getPortfolioById(portfolioId){
        return axios.get(PORTFOLIO_API_BASE_URL + '/' + portfolioId);
    }

    updatePortfolio(portfolio, portfolioId) {
        return axios.put(PORTFOLIO_API_BASE_URL + '/' + portfolioId, portfolio);
    }

    deletePortfolio(portfolioId){
        return axios.delete(PORTFOLIO_API_BASE_URL + '/' + portfolioId);
    }
}

export default new PortfolioService()