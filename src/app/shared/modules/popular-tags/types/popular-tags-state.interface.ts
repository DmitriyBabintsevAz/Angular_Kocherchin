import { PopularTagsType } from "../../../types/popular-tags-type";

export interface PopularTagsStateInterface {
  data: PopularTagsType[] | null
  error: string | null
  isLoading: boolean
}
