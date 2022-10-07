import { AxiosRepository } from '@/http/axios.repository';
import { landingPage, landingOnePage } from '../interfaces/landingpage.interface';

export class LandingPageRepository extends AxiosRepository {
    async getArticles(): Promise<landingPage[]> { 
        return await super.getAll();
    }

    async getOneCategory(product: string): Promise<landingOnePage[]> { 
        return await super.get('?filter='+ product);
    }

    async addArticle(body: any): Promise<landingPage[]> { 
        return await super.post(body);
    }
}

export const landingpageHttpRepository = new LandingPageRepository();