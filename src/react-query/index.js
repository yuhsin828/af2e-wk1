import { useQuery } from '@tanstack/react-query'
import { getPlaces, getPlaceById } from "../api";

export const usePlaces = () => {
    const { data, isLoading } = useQuery([], getPlaces);
    return { data, isLoading };
};

export const usePlaceById = (placeId) => {
    const { data, isLoading } = useQuery([placeId], getPlaceById);
    return { data, isLoading };
};