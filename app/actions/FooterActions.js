import alt from '../alt';

class FooterActions{
	constructor(){
		this.generateActions(
			'getTopCharactersSuccess',
			'getTopCharactersFail');
	}


	getTopCharacters(){
		$.ajax({uri: '/api/characters/top'})
		.done((data)=>{
			this.actions.getTopCharactersSuccess(data)
		})
		.fail((jqXhr)=>{
			this.actions.getTopCharactersFail(jqXhr)
		});


	}
}
export default alt.createActions(FooterActions);