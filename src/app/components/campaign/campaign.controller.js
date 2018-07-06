export default class CampaignController {
	constructor($log, $routeParams) {
		'ngInject';
		this.removeCampaigns = (str) => {
			let myEl = angular.element( document.querySelector('#campaign-'+str));
			myEl.remove();
		};
	};
	$onInit = () => {
		this.campaigns = [
    {
      "approved_comments": 2218,
      "approved_likes": 70147,
      "approved_posts": 158,
      "days_passed": 51,
	  "color": "#d12b31",
      "days_total": 51,
      "id": 1,
      "is_featured": true,
      "name": "Random name 1",
      "num_of_artists": 0,
      "progress": 100,
      "type": "Challenge"
    },
    {
      "approved_comments": 744,
      "approved_likes": 136072,
      "approved_posts": 108,
      "days_passed": 92,
      "days_total": 92,
	  "color": "#24a9ff",
      "id": 2,
      "is_featured": true,
      "name": "Random name 2",
      "num_of_artists": 42,
      "progress": 100,
      "type": "Influencer campaign"
    },
    {
      "approved_comments": 1616,
      "approved_likes": 47953,
      "approved_posts": 34,
      "days_passed": 82,
      "days_total": 82,
	  "color": "#5fd100",
      "id": 3,
      "is_featured": true,
      "name": "Random name 3",
      "num_of_artists": 0,
      "progress": 100,
      "type": "Giveaway"
    },
	{
      "approved_comments": 2218,
      "approved_likes": 70147,
      "approved_posts": 158,
      "days_passed": 51,
        "color": "#d12b31",
      "days_total": 51,
      "id": 4,
      "is_featured": true,
      "name": "Random name 4",
      "num_of_artists": 0,
      "progress": 100,
      "type": "Giveaway"
    },
    {
      "approved_comments": 744,
      "approved_likes": 136072,
      "approved_posts": 108,
      "days_passed": 92,
      "days_total": 92,
        "color": "#24a9ff",
      "id": 5,
      "is_featured": true,
      "name": "Random name 5",
      "num_of_artists": 42,
      "progress": 100,
      "type": "Influencer campaign"
    },
    {
      "approved_comments": 1616,
      "approved_likes": 47953,
      "approved_posts": 34,
      "days_passed": 82,
      "days_total": 82,
        "color": "#5fd100",
      "id": 6,
      "is_featured": true,
      "name": "Random name 6",
      "num_of_artists": 0,
      "progress": 100,
      "type": "Giveaway"
    },
            {
                "approved_comments": 2218,
                "approved_likes": 70147,
                "approved_posts": 158,
                "days_passed": 51,
                "color": "#d12b31",
                "days_total": 51,
                "id": 4,
                "is_featured": true,
                "name": "Random name 7",
                "num_of_artists": 0,
                "progress": 100,
                "type": "Giveaway"
            },
            {
                "approved_comments": 744,
                "approved_likes": 136072,
                "approved_posts": 108,
                "days_passed": 92,
                "days_total": 92,
                "color": "#24a9ff",
                "id": 5,
                "is_featured": true,
                "name": "Random name 8",
                "num_of_artists": 42,
                "progress": 100,
                "type": "Influencer campaign"
            },
            {
                "approved_comments": 1616,
                "approved_likes": 47953,
                "approved_posts": 34,
                "days_passed": 82,
                "days_total": 82,
                "color": "#5fd100",
                "id": 6,
                "is_featured": true,
                "name": "Random name 9",
                "num_of_artists": 0,
                "progress": 100,
                "type": "Giveaway"
            },
            {
                "approved_comments": 2218,
                "approved_likes": 70147,
                "approved_posts": 158,
                "days_passed": 51,
                "color": "#d12b31",
                "days_total": 51,
                "id": 4,
                "is_featured": true,
                "name": "Random name 10",
                "num_of_artists": 0,
                "progress": 100,
                "type": "Giveaway"
            },
            {
                "approved_comments": 744,
                "approved_likes": 136072,
                "approved_posts": 108,
                "days_passed": 92,
                "days_total": 92,
                "color": "#24a9ff",
                "id": 5,
                "is_featured": true,
                "name": "Random name 11",
                "num_of_artists": 42,
                "progress": 100,
                "type": "Influencer campaign"
            },
            {
                "approved_comments": 1616,
                "approved_likes": 47953,
                "approved_posts": 34,
                "days_passed": 82,
                "days_total": 82,
                "color": "#5fd100",
                "id": 6,
                "is_featured": true,
                "name": "Random name 12",
                "num_of_artists": 0,
                "progress": 100,
                "type": "Giveaway"
            },
            {
                "approved_comments": 2218,
                "approved_likes": 70147,
                "approved_posts": 158,
                "days_passed": 51,
                "color": "#d12b31",
                "days_total": 51,
                "id": 4,
                "is_featured": true,
                "name": "Random name 13",
                "num_of_artists": 0,
                "progress": 100,
                "type": "Giveaway"
            },
            {
                "approved_comments": 744,
                "approved_likes": 136072,
                "approved_posts": 108,
                "days_passed": 92,
                "days_total": 92,
                "color": "#24a9ff",
                "id": 5,
                "is_featured": true,
                "name": "Random name 14",
                "num_of_artists": 42,
                "progress": 100,
                "type": "Influencer campaign"
            },
            {
                "approved_comments": 1616,
                "approved_likes": 47953,
                "approved_posts": 34,
                "days_passed": 82,
                "days_total": 82,
                "color": "#5fd100",
                "id": 6,
                "is_featured": true,
                "name": "Random name 15",
                "num_of_artists": 0,
                "progress": 100,
                "type": "Giveaway"
            },
            {
                "approved_comments": 2218,
                "approved_likes": 70147,
                "approved_posts": 158,
                "days_passed": 51,
                "color": "#d12b31",
                "days_total": 51,
                "id": 4,
                "is_featured": true,
                "name": "Random name 16",
                "num_of_artists": 0,
                "progress": 100,
                "type": "Giveaway"
            },
            {
                "approved_comments": 744,
                "approved_likes": 136072,
                "approved_posts": 108,
                "days_passed": 92,
                "days_total": 92,
                "color": "#24a9ff",
                "id": 5,
                "is_featured": true,
                "name": "Random name 17",
                "num_of_artists": 42,
                "progress": 100,
                "type": "Influencer campaign"
            },
            {
                "approved_comments": 1616,
                "approved_likes": 47953,
                "approved_posts": 34,
                "days_passed": 82,
                "days_total": 82,
                "color": "#5fd100",
                "id": 6,
                "is_featured": true,
                "name": "Random name 18",
                "num_of_artists": 0,
                "progress": 100,
                "type": "Giveaway"
            },
    {
      "approved_comments": 1616,
      "approved_likes": 47953,
      "approved_posts": 34,
      "days_passed": 82,
      "days_total": 82,
        "color": "#5fd100",
      "id": 19,
      "is_featured": true,
      "name": "Random name 19",
      "num_of_artists": 0,
      "progress": 100,
      "type": "Giveaway"
    },
	];
		this.limit = 7;
		this.increaseLimit = (length) => {
			if (this.limit < length) {
			  	this.limit += 8;
			}
		};
		this.$log.info('Activated Dashboard View.');
	};
}
