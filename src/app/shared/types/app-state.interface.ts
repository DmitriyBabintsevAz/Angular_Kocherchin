import { ArticleStateInterface } from "../../article/types/article-state.interface";
import { AuthStateInterface } from "../../auth/types/auth-state.interface";
import { CreateArticleStateInterface } from "../../create-article/types/create-article-state.interface";
import { EditArticleStateInterface } from "../../edit-article/store/types/edit-article-state.interface";
import { SettingsStateInterface } from "../../settings/types/settings-state.interface";
import { UserProfileStateInterface } from "../../user-profile/types/user-profile-state.interface";
import { FeedStateInterface } from "../modules/feed/types/feed-state.interface";
import { PopularTagsStateInterface } from "../modules/popular-tags/types/popular-tags-state.interface";

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: FeedStateInterface
  popularTags: PopularTagsStateInterface
  article: ArticleStateInterface
  createArticle: CreateArticleStateInterface
  editArticle: EditArticleStateInterface
  settings: SettingsStateInterface
  userProfile: UserProfileStateInterface
}
