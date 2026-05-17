import { useQuery } from '@tanstack/react-query';
import { PORTFOLIO_DATA, PortfolioData } from '../data';

const fetchPortfolioData = async (): Promise<PortfolioData> => {
  // Simulating an API fetch
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PORTFOLIO_DATA);
    }, 500);
  });
};

export const usePortfolioData = () => {
  return useQuery({
    queryKey: ['portfolioData'],
    queryFn: fetchPortfolioData,
  });
};
