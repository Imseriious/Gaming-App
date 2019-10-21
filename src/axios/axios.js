export const getGameIDUrl = "https://api.newzoo.com/v1.0/metadata/noun/search?nouns=game,genre,country&include_aliases=true&__permission_set=Explorer%20Games";

export const headers = {
    headers: {
        "Authorization": "Bearer Lzt_hDtx0xiQ-zvfAdsyiTcEfW_0vRUdKJPN24JtzoQ"
    }
}

export const mostWatched5GamesUrl = "https://api.newzoo.com/v1.0/viewership/table_rankings?start_date=2019-09-01&end_date=2019-09-30&comp_start_date=2019-08-01&comp_end_date=2019-08-31&platforms=YouTube,Twitch&limit=5&__permission_set=Game%20Rankings";

export const top5PCGamesUrl = "https://api.newzoo.com/v1.0/pc_player_usage/game/comparison_data?fields=rank,rank_change,title,publisher,genre,player_share,sessions_per_user_per_day,average_playtime_per_day,average_session_time&start_date=2019-09-01&end_date=2019-09-30&comp_start_date=2019-08-01&comp_end_date=2019-08-31&geo_type=global&limit=5&__permission_set=Game%20Rankings";

export const mostWatchedGamesRankingUrl = "https://api.newzoo.com/v1.0/viewership/table_rankings?start_date=2019-09-01&end_date=2019-09-30&comp_start_date=2019-08-01&comp_end_date=2019-08-31&platforms=YouTube,Twitch&limit=50&__permission_set=Game%20Rankings";

export const topPCRankingUrl = "https://api.newzoo.com/v1.0/pc_player_usage/game/comparison_data?fields=rank,rank_change,title,publisher,genre,player_share,sessions_per_user_per_day,average_playtime_per_day,average_session_time&start_date=2019-09-01&end_date=2019-09-30&comp_start_date=2019-08-01&comp_end_date=2019-08-31&geo_type=global&limit=50&__permission_set=Game%20Rankings";
