var controller = function(){
	var self =  this;
	self.updateCityListView();
	self.activateEvents();
	return self;
};

controller.prototype.activateEvents = function(){
	var self = this;
	$('ul.cityListItem > li > a').on("click", self.changeView);
};

controller.prototype.changeView = function(event){
	var self = this;
	var selectedCity = event.currentTarget.text;
	// $('.cityListItem').on("click", function(){
		$('#homeContainer').hide();
		$('#citySelection').show();
		$('body').css('min-height', '2000px');
		$('body').css('padding-top', '70px');
		$('.container').css('max-width', '1170px');
		$('#selectedCityNameList > a').text(selectedCity);
		$('#cityPostCount').text("007");// to change the text of post count badge
	// });
};

controller.prototype.fetchCityList = function(){
	var self = this;
	var cityData = {
	cityList : {Chandigarh_Tricity : [
									"Chandigarh",
									"Mohali",
									"Panchkula"]
				,NCR : [
									"Noida",
									"Delhi",
									"Gurgaon",
									"Ghaziabad",
									"Faridabad"]
				,Bangalore: {}
				,Pune: {}
				,Mumbai: {}
				,Chennai: {}
				,Hyderabad: {}
				,Ahemdabad: {}
				,Jaipur: {}
				,Kochi: {}
				,Bhubneshwar: {}
				,Kolkata: {}
				,Others: []
				}
	};

	delete cityData.cityList["Others"];
	var cityList = Object.keys(cityData.cityList).sort();
	cityList.push("Others");
	return cityList;
};

controller.prototype.updateCityListView = function(){
	var self = this;
	var cityList = self.fetchCityList();
	_.each(cityList, function(city){
		if(city !== "Others"){
			var listItem = '<li><a href="#">'+ city +'</a></li>';
		}
		else {
			var listItem = '<li class="divider"></li><li><a href="#">'+ city +'</a></li>';
		}
		$('ul.cityListItem').append(listItem);
	});
};

new controller();