export default class CampaignDetailController {
	constructor($log, $routeParams, $scope) {
		'ngInject';
		'ngRoute';
		'angularUtils.directives.dirPagination';
		var self = this;
		self.campaignData = [
			{
                "media": [
                    {
                        "author_username": "whitneylichfield",
                        "link": "https://www.instagram.com/p/Bft3X32FPnw",
                        "likes_number": "173",
                        "comments_number": "9",
                        "id": 553041,
                        "pic": "https://scontent.cdninstagram.com/vp/0c3cee0074cf0158ba6d612fd49a2307/5B4B14B5/t51.2885-15/s150x150/e35/28156306_162771571193484_4860574107600683008_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/128d9e46a1b5be6d4c61e130dab82fe2/5B34AAB3/t51.2885-19/s150x150/22159477_367737466996186_4451933322578231296_n.jpg",
                        "caption": "I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "mama.jaeger",
                        "link": "https://www.instagram.com/p/BfttbGCgzzj",
                        "likes_number": "262",
                        "comments_number": "5",
                        "id": 554346,
                        "pic": "https://scontent.cdninstagram.com/vp/a13922862cf0a604a48bdc9a19791e58/5B3194AB/t51.2885-15/s150x150/e35/27894534_985725368247256_6961620036620386304_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/e5b076ef95d0ac4917b395aa74115b26/5B16AB25/t51.2885-19/s150x150/23498289_147483275878243_4553813692050833408_n.jpg",
                        "caption": "Vacation has basically looked like him only letting me wear my sunglasses upside down and learning he is starting to be really afraid of bugs 🤷🏼‍♀️😎🐜",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "binkiesandbaubles",
                        "link": "https://www.instagram.com/p/Bftj_hknK6-",
                        "likes_number": "316",
                        "comments_number": "9",
                        "id": 553067,
                        "pic": "https://scontent.cdninstagram.com/vp/34c7a46449c0d5e2a02e1fcbd55cd2b1/5B48F743/t51.2885-15/s150x150/e35/c0.135.1080.1080/28435115_213583085858981_2104104877742358528_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/2fff8947e2b21ccb73190eeb9dfd84f0/5B4500A3/t51.2885-19/s150x150/26871518_141726806496007_4052951515277557760_n.jpg",
                        "caption": "Hurt my back yesterday... putting on my sports bra 😆 feeling a little old. Had to skip the gym today and doing some Netflix and chill with the girls. This sweatshirt and the home decor is ALL on SALE // http://liketk.it/2uNKx #liketkit @liketoknow.it .\n.\nShop my daily looks by following me on the LIKEtoKNOW.it app\n.\n.\n.\n.\n.\n.\n #LTKunder50 #LTKsalealert #LTKhome #fashionmom #momootd #realmomstyle #everydaystyle #realoutfitgram  #busymom #fashiononabudget #momuniform  #affordablefashion  #wintertrends #winterfashion #casualchic #persuepretty  #momsrule #momsarethebest  #styledbyme #outfitgram #legitmomstyle #fashionadvice #fashionbombdaily #coloradomom #goodnightmacaroon #targethome",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "ester.fomenko",
                        "link": "https://www.instagram.com/p/BftfyLLFflk",
                        "likes_number": "467",
                        "comments_number": "15",
                        "id": 553354,
                        "pic": "https://scontent.cdninstagram.com/vp/2c1f73b3d9532d0583f9cd61ef729e99/5B2BFC24/t51.2885-15/e35/p320x320/28156255_162695694439999_6066120549405294592_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/f55ad58d4a6ccabf3426623bc5351d12/5B48E980/t51.2885-19/s150x150/27580978_159084528083982_3722720623873490944_n.jpg",
                        "caption": "Last day in Miami! And today Aria LOVED the beach! There’s still hope her surfing career😂 Had an amazing time with my humans💛",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "Torunn Stuen",
                        "link": "https://www.youtube.com/watch?v=AKI21-jDK3M",
                        "likes_number": "0",
                        "comments_number": "0",
                        "id": 548224,
                        "pic": "https://i.ytimg.com/vi/AKI21-jDK3M/hqdefault.jpg",
                        "author_pic": "https://yt3.ggpht.com/-8hbUS5iyomA/AAAAAAAAAAI/AAAAAAAAAAA/vDuS7uZooTQ/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
                        "caption": "So excited to announce my collection with Red Dress! You can shop all my picks here: https://www.reddressboutique.com/collections/torunn-lee \nFull blog posts of the outfits features on www.beyoutifulblog.com",
                        "social_network": "Youtube"
                    },
                    {
                        "author_username": "mama.jaeger",
                        "link": "https://www.instagram.com/p/BfttbGCgzzj",
                        "likes_number": "262",
                        "comments_number": "5",
                        "id": 554324,
                        "pic": "https://scontent.cdninstagram.com/vp/a13922862cf0a604a48bdc9a19791e58/5B3194AB/t51.2885-15/s150x150/e35/27894534_985725368247256_6961620036620386304_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/e5b076ef95d0ac4917b395aa74115b26/5B16AB25/t51.2885-19/s150x150/23498289_147483275878243_4553813692050833408_n.jpg",
                        "caption": "Vacation has basically looked like him only letting me wear my sunglasses upside down and learning he is starting to be really afraid of bugs 🤷🏼‍♀️😎🐜",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "mama.jaeger",
                        "link": "https://www.instagram.com/p/BfttbGCgzzj",
                        "likes_number": "262",
                        "comments_number": "5",
                        "id": 554312,
                        "pic": "https://scontent.cdninstagram.com/vp/a13922862cf0a604a48bdc9a19791e58/5B3194AB/t51.2885-15/s150x150/e35/27894534_985725368247256_6961620036620386304_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/e5b076ef95d0ac4917b395aa74115b26/5B16AB25/t51.2885-19/s150x150/23498289_147483275878243_4553813692050833408_n.jpg",
                        "caption": "Vacation has basically looked like him only letting me wear my sunglasses upside down and learning he is starting to be really afraid of bugs 🤷🏼‍♀️😎🐜",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "mama.jaeger",
                        "link": "https://www.instagram.com/p/BfttbGCgzzj",
                        "likes_number": "262",
                        "comments_number": "5",
                        "id": 554311,
                        "pic": "https://scontent.cdninstagram.com/vp/a13922862cf0a604a48bdc9a19791e58/5B3194AB/t51.2885-15/s150x150/e35/27894534_985725368247256_6961620036620386304_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/e5b076ef95d0ac4917b395aa74115b26/5B16AB25/t51.2885-19/s150x150/23498289_147483275878243_4553813692050833408_n.jpg",
                        "caption": "Vacation has basically looked like him only letting me wear my sunglasses upside down and learning he is starting to be really afraid of bugs 🤷🏼‍♀️😎🐜",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "whitneylichfield",
                        "link": "https://www.instagram.com/p/Bft3X32FPnw",
                        "likes_number": "173",
                        "comments_number": "9",
                        "id": 553004,
                        "pic": "https://scontent.cdninstagram.com/vp/0c3cee0074cf0158ba6d612fd49a2307/5B4B14B5/t51.2885-15/s150x150/e35/28156306_162771571193484_4860574107600683008_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/128d9e46a1b5be6d4c61e130dab82fe2/5B34AAB3/t51.2885-19/s150x150/22159477_367737466996186_4451933322578231296_n.jpg",
                        "caption": "I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "mama.jaeger",
                        "link": "https://www.instagram.com/p/BfttbGCgzzj",
                        "likes_number": "262",
                        "comments_number": "5",
                        "id": 554365,
                        "pic": "https://scontent.cdninstagram.com/vp/a13922862cf0a604a48bdc9a19791e58/5B3194AB/t51.2885-15/s150x150/e35/27894534_985725368247256_6961620036620386304_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/e5b076ef95d0ac4917b395aa74115b26/5B16AB25/t51.2885-19/s150x150/23498289_147483275878243_4553813692050833408_n.jpg",
                        "caption": "Vacation has basically looked like him only letting me wear my sunglasses upside down and learning he is starting to be really afraid of bugs 🤷🏼‍♀️😎🐜",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "binkiesandbaubles",
                        "link": "https://www.instagram.com/p/Bftj_hknK6-",
                        "likes_number": "316",
                        "comments_number": "9",
                        "id": 553005,
                        "pic": "https://scontent.cdninstagram.com/vp/34c7a46449c0d5e2a02e1fcbd55cd2b1/5B48F743/t51.2885-15/s150x150/e35/c0.135.1080.1080/28435115_213583085858981_2104104877742358528_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/2fff8947e2b21ccb73190eeb9dfd84f0/5B4500A3/t51.2885-19/s150x150/26871518_141726806496007_4052951515277557760_n.jpg",
                        "caption": "Hurt my back yesterday... putting on my sports bra 😆 feeling a little old. Had to skip the gym today and doing some Netflix and chill with the girls. This sweatshirt and the home decor is ALL on SALE // http://liketk.it/2uNKx #liketkit @liketoknow.it .\n.\nShop my daily looks by following me on the LIKEtoKNOW.it app\n.\n.\n.\n.\n.\n.\n #LTKunder50 #LTKsalealert #LTKhome #fashionmom #momootd #realmomstyle #everydaystyle #realoutfitgram  #busymom #fashiononabudget #momuniform  #affordablefashion  #wintertrends #winterfashion #casualchic #persuepretty  #momsrule #momsarethebest  #styledbyme #outfitgram #legitmomstyle #fashionadvice #fashionbombdaily #coloradomom #goodnightmacaroon #targethome",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "ester.fomenko",
                        "link": "https://www.instagram.com/p/BftfyLLFflk",
                        "likes_number": "467",
                        "comments_number": "15",
                        "id": 553362,
                        "pic": "https://scontent.cdninstagram.com/vp/2c1f73b3d9532d0583f9cd61ef729e99/5B2BFC24/t51.2885-15/e35/p320x320/28156255_162695694439999_6066120549405294592_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/f55ad58d4a6ccabf3426623bc5351d12/5B48E980/t51.2885-19/s150x150/27580978_159084528083982_3722720623873490944_n.jpg",
                        "caption": "Last day in Miami! And today Aria LOVED the beach! There’s still hope her surfing career😂 Had an amazing time with my humans💛",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "Torunn Stuen",
                        "link": "https://www.youtube.com/watch?v=AKI21-jDK3M",
                        "likes_number": "0",
                        "comments_number": "0",
                        "id": 548274,
                        "pic": "https://i.ytimg.com/vi/AKI21-jDK3M/hqdefault.jpg",
                        "author_pic": "https://yt3.ggpht.com/-8hbUS5iyomA/AAAAAAAAAAI/AAAAAAAAAAA/vDuS7uZooTQ/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
                        "caption": "So excited to announce my collection with Red Dress! You can shop all my picks here: https://www.reddressboutique.com/collections/torunn-lee \nFull blog posts of the outfits features on www.beyoutifulblog.com",
                        "social_network": "Youtube"
                    },
                    {
                        "author_username": "mama.jaeger",
                        "link": "https://www.instagram.com/p/BfttbGCgzzj",
                        "likes_number": "262",
                        "comments_number": "5",
                        "id": 554124,
                        "pic": "https://scontent.cdninstagram.com/vp/a13922862cf0a604a48bdc9a19791e58/5B3194AB/t51.2885-15/s150x150/e35/27894534_985725368247256_6961620036620386304_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/e5b076ef95d0ac4917b395aa74115b26/5B16AB25/t51.2885-19/s150x150/23498289_147483275878243_4553813692050833408_n.jpg",
                        "caption": "Vacation has basically looked like him only letting me wear my sunglasses upside down and learning he is starting to be really afraid of bugs 🤷🏼‍♀️😎🐜",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "mama.jaeger",
                        "link": "https://www.instagram.com/p/BfttbGCgzzj",
                        "likes_number": "262",
                        "comments_number": "5",
                        "id": 554532,
                        "pic": "https://scontent.cdninstagram.com/vp/a13922862cf0a604a48bdc9a19791e58/5B3194AB/t51.2885-15/s150x150/e35/27894534_985725368247256_6961620036620386304_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/e5b076ef95d0ac4917b395aa74115b26/5B16AB25/t51.2885-19/s150x150/23498289_147483275878243_4553813692050833408_n.jpg",
                        "caption": "Vacation has basically looked like him only letting me wear my sunglasses upside down and learning he is starting to be really afraid of bugs 🤷🏼‍♀️😎🐜",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "mama.jaeger",
                        "link": "https://www.instagram.com/p/BfttbGCgzzj",
                        "likes_number": "262",
                        "comments_number": "5",
                        "id": 554001,
                        "pic": "https://scontent.cdninstagram.com/vp/a13922862cf0a604a48bdc9a19791e58/5B3194AB/t51.2885-15/s150x150/e35/27894534_985725368247256_6961620036620386304_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/e5b076ef95d0ac4917b395aa74115b26/5B16AB25/t51.2885-19/s150x150/23498289_147483275878243_4553813692050833408_n.jpg",
                        "caption": "Vacation has basically looked like him only letting me wear my sunglasses upside down and learning he is starting to be really afraid of bugs 🤷🏼‍♀️😎🐜",
                        "social_network": "Instagram"
                    }
                ],
                "count": 16
            }
		];
		self.classificator = {
			'name': 'Pending'
		};
		self.social = {
			'name': 'Instagram',
		};
		self.removeCampaigns = (str) => {
			let myEl = angular.element( document.querySelector('#campaign-'+str));
			myEl.remove();
		};
		self.activeSocial = (str) => {
			document.querySelector('.social.active').classList.remove('active');
			document.querySelector('#'+str).classList.add('active');
		};
		self.pendingPosts = () => {
			document.querySelector('.classificator.active').classList.remove('active');
			document.querySelector('#'+this.classificator.name).classList.add('active');
		};
		self.campaignId = $routeParams.campaignId;
		self.$log = $log;
		self.approvePost = (str, ArrPending, ArrApproved) => {
			ArrPending.forEach( (el) => {
				if (el.id === str) {
					var approved = el;
					ArrApproved.splice(ArrApproved.length, 0, approved);
					ArrPending.splice(ArrPending.indexOf(el), 1);
				}
			});
		};
		self.show = [{
			"media": []
		}];
		self.accumulate = () => {
			self.campaignData[0].media.forEach((el) => {
				self.show[0].media.splice(self.show[0].media.length, 1, el);
			});
		};
		self.filter = (arr) => {
			self.show[0].media.splice(0, self.show[0].media.length);
			self.accumulate();
			self.campaignData[0].media.forEach((el) =>{
				arr.forEach((element) =>{
						if (el.caption.indexOf(element) == -1){
							self.show[0].media.splice(self.show[0].media.indexOf(el), 1);
						}
				})
			});
		}
	};
	$onInit = () => {
		this.approved =[
			{
                "media": [
                    {
                        "author_username": "whitneylichfield",
                        "link": "https://www.instagram.com/p/Bft3X32FPnw",
                        "likes_number": "173",
                        "comments_number": "9",
                        "id": 553041,
                        "pic": "https://scontent.cdninstagram.com/vp/0c3cee0074cf0158ba6d612fd49a2307/5B4B14B5/t51.2885-15/s150x150/e35/28156306_162771571193484_4860574107600683008_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/128d9e46a1b5be6d4c61e130dab82fe2/5B34AAB3/t51.2885-19/s150x150/22159477_367737466996186_4451933322578231296_n.jpg",
                        "caption": "I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "mama.jaeger",
                        "link": "https://www.instagram.com/p/BfttbGCgzzj",
                        "likes_number": "262",
                        "comments_number": "5",
                        "id": 554346,
                        "pic": "https://scontent.cdninstagram.com/vp/a13922862cf0a604a48bdc9a19791e58/5B3194AB/t51.2885-15/s150x150/e35/27894534_985725368247256_6961620036620386304_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/e5b076ef95d0ac4917b395aa74115b26/5B16AB25/t51.2885-19/s150x150/23498289_147483275878243_4553813692050833408_n.jpg",
                        "caption": "Vacation has basically looked like him only letting me wear my sunglasses upside down and learning he is starting to be really afraid of bugs 🤷🏼‍♀️😎🐜",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "binkiesandbaubles",
                        "link": "https://www.instagram.com/p/Bftj_hknK6-",
                        "likes_number": "316",
                        "comments_number": "9",
                        "id": 553067,
                        "pic": "https://scontent.cdninstagram.com/vp/34c7a46449c0d5e2a02e1fcbd55cd2b1/5B48F743/t51.2885-15/s150x150/e35/c0.135.1080.1080/28435115_213583085858981_2104104877742358528_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/2fff8947e2b21ccb73190eeb9dfd84f0/5B4500A3/t51.2885-19/s150x150/26871518_141726806496007_4052951515277557760_n.jpg",
                        "caption": "Hurt my back yesterday... putting on my sports bra 😆 feeling a little old. Had to skip the gym today and doing some Netflix and chill with the girls. This sweatshirt and the home decor is ALL on SALE // http://liketk.it/2uNKx #liketkit @liketoknow.it .\n.\nShop my daily looks by following me on the LIKEtoKNOW.it app\n.\n.\n.\n.\n.\n.\n #LTKunder50 #LTKsalealert #LTKhome #fashionmom #momootd #realmomstyle #everydaystyle #realoutfitgram  #busymom #fashiononabudget #momuniform  #affordablefashion  #wintertrends #winterfashion #casualchic #persuepretty  #momsrule #momsarethebest  #styledbyme #outfitgram #legitmomstyle #fashionadvice #fashionbombdaily #coloradomom #goodnightmacaroon #targethome",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "ester.fomenko",
                        "link": "https://www.instagram.com/p/BftfyLLFflk",
                        "likes_number": "467",
                        "comments_number": "15",
                        "id": 553354,
                        "pic": "https://scontent.cdninstagram.com/vp/2c1f73b3d9532d0583f9cd61ef729e99/5B2BFC24/t51.2885-15/e35/p320x320/28156255_162695694439999_6066120549405294592_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/f55ad58d4a6ccabf3426623bc5351d12/5B48E980/t51.2885-19/s150x150/27580978_159084528083982_3722720623873490944_n.jpg",
                        "caption": "Last day in Miami! And today Aria LOVED the beach! There’s still hope her surfing career😂 Had an amazing time with my humans💛",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "Torunn Stuen",
                        "link": "https://www.youtube.com/watch?v=AKI21-jDK3M",
                        "likes_number": "0",
                        "comments_number": "0",
                        "id": 548224,
                        "pic": "https://i.ytimg.com/vi/AKI21-jDK3M/hqdefault.jpg",
                        "author_pic": "https://yt3.ggpht.com/-8hbUS5iyomA/AAAAAAAAAAI/AAAAAAAAAAA/vDuS7uZooTQ/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
                        "caption": "So excited to announce my collection with Red Dress! You can shop all my picks here: https://www.reddressboutique.com/collections/torunn-lee \nFull blog posts of the outfits features on www.beyoutifulblog.com",
                        "social_network": "Youtube"
                    }
                ],
                "count": 5
            }
		];
		this.rejected = [
			{
                "media": [
                    {
                        "author_username": "whitneylichfield",
                        "link": "https://www.instagram.com/p/Bft3X32FPnw",
                        "likes_number": "173",
                        "comments_number": "9",
                        "id": 553041,
                        "pic": "https://scontent.cdninstagram.com/vp/0c3cee0074cf0158ba6d612fd49a2307/5B4B14B5/t51.2885-15/s150x150/e35/28156306_162771571193484_4860574107600683008_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/128d9e46a1b5be6d4c61e130dab82fe2/5B34AAB3/t51.2885-19/s150x150/22159477_367737466996186_4451933322578231296_n.jpg",
                        "caption": "I haven’t stuck to very many of my New Years resolutions... or any ever, but this year I started BBG by @kayla_itsines and I have to say I love it and have been having so much fun spending a little time on me every morning || Here’s to sticking to my resolutions this year 🥂 || and plus I have the cutest little workout buddies",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "mama.jaeger",
                        "link": "https://www.instagram.com/p/BfttbGCgzzj",
                        "likes_number": "262",
                        "comments_number": "5",
                        "id": 554346,
                        "pic": "https://scontent.cdninstagram.com/vp/a13922862cf0a604a48bdc9a19791e58/5B3194AB/t51.2885-15/s150x150/e35/27894534_985725368247256_6961620036620386304_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/e5b076ef95d0ac4917b395aa74115b26/5B16AB25/t51.2885-19/s150x150/23498289_147483275878243_4553813692050833408_n.jpg",
                        "caption": "Vacation has basically looked like him only letting me wear my sunglasses upside down and learning he is starting to be really afraid of bugs 🤷🏼‍♀️😎🐜",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "binkiesandbaubles",
                        "link": "https://www.instagram.com/p/Bftj_hknK6-",
                        "likes_number": "316",
                        "comments_number": "9",
                        "id": 553067,
                        "pic": "https://scontent.cdninstagram.com/vp/34c7a46449c0d5e2a02e1fcbd55cd2b1/5B48F743/t51.2885-15/s150x150/e35/c0.135.1080.1080/28435115_213583085858981_2104104877742358528_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/2fff8947e2b21ccb73190eeb9dfd84f0/5B4500A3/t51.2885-19/s150x150/26871518_141726806496007_4052951515277557760_n.jpg",
                        "caption": "Hurt my back yesterday... putting on my sports bra 😆 feeling a little old. Had to skip the gym today and doing some Netflix and chill with the girls. This sweatshirt and the home decor is ALL on SALE // http://liketk.it/2uNKx #liketkit @liketoknow.it .\n.\nShop my daily looks by following me on the LIKEtoKNOW.it app\n.\n.\n.\n.\n.\n.\n #LTKunder50 #LTKsalealert #LTKhome #fashionmom #momootd #realmomstyle #everydaystyle #realoutfitgram  #busymom #fashiononabudget #momuniform  #affordablefashion  #wintertrends #winterfashion #casualchic #persuepretty  #momsrule #momsarethebest  #styledbyme #outfitgram #legitmomstyle #fashionadvice #fashionbombdaily #coloradomom #goodnightmacaroon #targethome",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "ester.fomenko",
                        "link": "https://www.instagram.com/p/BftfyLLFflk",
                        "likes_number": "467",
                        "comments_number": "15",
                        "id": 553354,
                        "pic": "https://scontent.cdninstagram.com/vp/2c1f73b3d9532d0583f9cd61ef729e99/5B2BFC24/t51.2885-15/e35/p320x320/28156255_162695694439999_6066120549405294592_n.jpg",
                        "author_pic": "https://scontent.cdninstagram.com/vp/f55ad58d4a6ccabf3426623bc5351d12/5B48E980/t51.2885-19/s150x150/27580978_159084528083982_3722720623873490944_n.jpg",
                        "caption": "Last day in Miami! And today Aria LOVED the beach! There’s still hope her surfing career😂 Had an amazing time with my humans💛",
                        "social_network": "Instagram"
                    },
                    {
                        "author_username": "Torunn Stuen",
                        "link": "https://www.youtube.com/watch?v=AKI21-jDK3M",
                        "likes_number": "0",
                        "comments_number": "0",
                        "id": 548224,
                        "pic": "https://i.ytimg.com/vi/AKI21-jDK3M/hqdefault.jpg",
                        "author_pic": "https://yt3.ggpht.com/-8hbUS5iyomA/AAAAAAAAAAI/AAAAAAAAAAA/vDuS7uZooTQ/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
                        "caption": "So excited to announce my collection with Red Dress! You can shop all my picks here: https://www.reddressboutique.com/collections/torunn-lee \nFull blog posts of the outfits features on www.beyoutifulblog.com",
                        "social_network": "Youtube"
                    }
                ],
                "count": 5
            }
		];
        this.readonly = false;
        this.keywords = ['whatever'];


	};
}
