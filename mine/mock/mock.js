module.exports = {
	rules : [
		{
			pattern:/\/api\/getNewslist.php\?rtype=origin$/,
			respondwith:'./newsData.json'
		},
		{
			pattern:/\/api\/getNewslist.php\?rtype=refresh$/,
			respondwith:'./newsDataRefresh.json'
		},
		{
			pattern:/\/api\/getNewslist.php\?rtype=more$/,
			respondwith:'./newsDataMore.json'
		}
	]
};

