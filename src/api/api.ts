/* Core */
import axios from 'axios';

export const api = {
    async getTags() {
        const { data: tags } = await axios.get(
            `${process.env.REACT_APP_API_URL}/tags`,
        );

        return tags;
    },
    async getTips() {
        const { data: tips } = await axios.get(
            `${process.env.REACT_APP_API_URL}/tips`,
        );

        return tips;
    },
    async getTipById(id: string) {
        const { data: tipById } = await axios.get(
            `${process.env.REACT_APP_API_URL}/tips/${id}`,
        );

        return tipById;
    },
    async createTip(tip) {
        const { data: newTip } = await axios.post(
            `${process.env.REACT_APP_API_URL}/tips`,
            tip,
        );

        return newTip;
    },
};
