import alt from '../alt';

Class StatsActions{
	constructor(){
		this.generateActions(
			'getStatsSuccess',
			'getStatsFail'
			);
	}

	getStats(){
		$.ajax({
			url: 'api/stats'
		})
		.done((data) => {
			this.actions.getStatsSuccess(data);
		})
		.fail((jqXhr) =>{
			this.actions.getStatsFail(jqHhr);
		});
	}
}

export default alt.createActins(StatsActions);