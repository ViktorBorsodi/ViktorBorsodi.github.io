$.ajax({
	url: 'https://wind-bow.gomix.me/twitch-api/streams/freecodecamp',
	jsonp: "callback",
	dataType: "jsonp",
	success: function(response) {
		console.log(response);
		if (response.stream == null) {
			$("#fcc").html("Offline");
			$("#fcc").parent().addClass("offline");
		} else {
			$("#fcc").html(response.stream.channel.status);
			$("#fcc").parent().addClass("online");
		}
	}
});

$.ajax({
	url: 'https://wind-bow.gomix.me/twitch-api/streams/esl_sc2',
	jsonp: "callback",
	dataType: "jsonp",
	success: function(response) {
		console.log(response);
		if (response.stream == null) {
			$("#esl").html("Offline");
			$("#esl").parent().addClass("offline");
		} else {
			$("#esl").html(response.stream.channel.status);
			$("#esl").parent().addClass("online");
		}
	}
});

$.ajax({
	url: 'https://wind-bow.gomix.me/twitch-api/streams/ogamingsc2',
	jsonp: "callback",
	dataType: "jsonp",
	success: function(response) {
		console.log(response);
		if (response.stream == null) {
			$("#ogaming").html("Offline");
			$("#ogaming").parent().addClass("offline");
		} else {
			$("#ogaming").html(response.stream.channel.status);
			$("#ogaming").parent().addClass("online");
		}
	}
});

$.ajax({
	url: 'https://wind-bow.gomix.me/twitch-api/streams/cretetion',
	jsonp: "callback",
	dataType: "jsonp",
	success: function(response) {
		console.log(response);
		if (response.stream == null) {
			$("#cretetion").html("Offline");
			$("#cretetion").parent().addClass("offline");
		} else {
			$("#cretetion").html(response.stream.channel.status);
			$("#cretetion").parent().addClass("online");
		}
	}
});

$.ajax({
	url: 'https://wind-bow.gomix.me/twitch-api/streams/storbeck',
	jsonp: "callback",
	dataType: "jsonp",
	success: function(response) {
		console.log(response);
		if (response.stream == null) {
			$("#storbeck").html("Offline");
			$("#storbeck").parent().addClass("offline");
		} else {
			$("#storbeck").html(response.stream.channel.status);
			$("#storbeck").parent().addClass("online");
		}
	}
});

$.ajax({
	url: 'https://wind-bow.gomix.me/twitch-api/streams/habathcx',
	jsonp: "callback",
	dataType: "jsonp",
	success: function(response) {
		console.log(response);
		if (response.stream == null) {
			$("#habathcx").html("Offline");
			$("#habathcx").parent().addClass("offline");
		} else {
			$("#habathcx").html(response.stream.channel.status);
			$("#habathcx").parent().addClass("online");
		}
	}
});

$.ajax({
	url: 'https://wind-bow.gomix.me/twitch-api/streams/RobotCaleb',
	jsonp: "callback",
	dataType: "jsonp",
	success: function(response) {
		console.log(response);
		if (response.stream == null) {
			$("#robot").html("Offline");
			$("#robot").parent().addClass("offline");
		} else {
			$("#robot").html(response.stream.channel.status);
			$("#robot").parent().addClass("online");
		}
	}
});

$.ajax({
	url: 'https://wind-bow.gomix.me/twitch-api/streams/noobs2ninjas',
	jsonp: "callback",
	dataType: "jsonp",
	success: function(response) {
		console.log(response);
		if (response.stream == null) {
			$("#noobs").html("Offline");
			$("#noobs").parent().addClass("offline");
		} else {
			$("#noobs").html(response.stream.channel.status);
			$("#noobs").parent().addClass("online");
		}
	}
});

$("#online").on("change",function() {
	$(".offline").css("visibility","collapse");
	$(".online").css("visibility","visible")
});

$("#offline").on("change",function() {
	$(".online").css("visibility","collapse");
	$(".offline").css("visibility","visible")
});

$("#all").on("change",function() {
	$(".online").css("visibility","visible");
	$(".offline").css("visibility","visible")
});