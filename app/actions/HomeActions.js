import alt from '../alt';

class HomeActions {

	constructor(){
		this.generateActions(
			'getTwoCharactersSuccess',
			'getTwoCharactersFail',
			'voteFail'
			)
	}

	getTwoCharacters(){
		$.ajax({ url: '/api/characters'})
			.done(data =>{
				this.actions.getTwoCharactersSuccess(data)
			})
			.fail(jqHxhr =>{
				this.actions.getTwoCharactersFail(jqHxhr.responseJSON.message);
			});
	}

	vote(winner,loser){
		$.ajax({
			type:'PUT',
			url: '/api/characters',
			data: {winner:winner, loser:loser}
		})
		.done(() =>{
			this.actions.getTwoCharacters();
		})
		.fail(() =>{
			this.actions.voteFail(jqHxhr.responseJSON.message);
		});
	}
}

export default alt.createActions(HomeActions);