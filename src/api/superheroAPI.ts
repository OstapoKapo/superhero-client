import axiosInstance from "@/utils/restAPIConfig"

export const getAllHeroesAPI = async ({page, perPage} : {page: number, perPage: number}) => {
    console.log('dasd')
    const res = await axiosInstance.get(`/heroes/?page=${page}&perPage=${perPage}`);
    return res.data;
}

export const getHeroByIdAPI = async (id: number) => {
    const res = await axiosInstance.get(`/heroes/${id}`);
    return res.data;
}

export const createHeroAPI = async (heroData: FormData) => {
    const res = await axiosInstance.post("/heroes", heroData, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
    return res.data;
}

export const changeHeroInfoAPI = async ({id, heroData}: {id: number, heroData: FormData}) => {
    const res = await axiosInstance.put(`/heroes/${id}`, heroData);
    return res.data;
}

export const deleteHeroAPI = async (id: number) => {
    const res = await axiosInstance.delete(`/heroes/${id}`);
    return res.data;
}