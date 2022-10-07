import axios from "axios";
import { EnvironmentConstants, EnvironmentConstants2 } from "../constants/enviromentConstants";
import { RepositoryInterface } from "@/http/interfaces/repository.interface";

export abstract class AxiosRepository implements RepositoryInterface {

    private host = EnvironmentConstants.HOST;
    private host2 = EnvironmentConstants2.HOST;

    public async delete(id: number): Promise<any> {
        return (await axios.delete(this.host + '/' + id)).data;
    }

    public async deleteAll(data: {}): Promise<any> {
        return (await axios.delete(this.host, { data })).data;
    }

    public async get(id: number | string): Promise<any> {
        return (await axios.get(this.host + '/' + id)).data;
    }

    public async getAll(): Promise<any> {
        return (await axios.get(this.host)).data;
    }

    async post(data: {}): Promise<any> {
        return (await axios.post('https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter', data)).data;
    }

    async put(id: number, data: {}): Promise<any> {
        return (await axios.put(this.host + '/' + id, data)).data;
    }
}