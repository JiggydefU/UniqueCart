import apiClient from './apiClient';
import { ApiResponse } from './types';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type UniqueCartUserType = 'ADMIN' | 'CLIENT' | 'GUEST';

class RestApiService {
    private async send<T, U>(
        endPoint: string,
        method: HttpMethod,
        type: UniqueCartUserType,
        payload?: U,
        params?: Record<string, any>,
    ): Promise<ApiResponse<T>> {
        try {
            // TODO: based on type change authorization token
            const response = await apiClient.request<T>({
                url: endPoint,
                method,
                ...(method === 'GET' && { params }), // Attach query parameters for GET
                ...(method !== 'GET' && { data: payload }), // Attach body payload for non-GET
                headers: {
                    UniqueCartUserType: type,
                },
            });

            return {
                ok: true,
                data: response.data,
            };
        } catch (error: any) {
            return {
                ok: false,
                originalError: error,
            };
        }
    }

    async get<T>(
        endPoint: string,
        type: UniqueCartUserType,
        params?: Record<string, any>,
    ): Promise<ApiResponse<T>> {
        return this.send<T, undefined>(
            endPoint,
            'GET',
            type,
            undefined,
            params,
        );
    }

    async post<T, U>(
        endPoint: string,
        type: UniqueCartUserType,
        payload: U,
    ): Promise<ApiResponse<T>> {
        return this.send<T, U>(endPoint, 'POST', type, payload);
    }

    async put<T, U>(
        endPoint: string,
        type: UniqueCartUserType,
        payload: U,
    ): Promise<ApiResponse<T>> {
        return this.send<T, U>(endPoint, 'PUT', type, payload);
    }

    async delete<T, U>(
        endPoint: string,
        type: UniqueCartUserType,
        payload?: U,
    ): Promise<ApiResponse<T>> {
        return this.send<T, U>(endPoint, 'DELETE', type, payload);
    }
}

export const apiService = new RestApiService();
