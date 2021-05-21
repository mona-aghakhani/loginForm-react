import React from 'react';
class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			province : [],
			// states : [],
			cities : [],
			selectedProvince : '',
			// selectedState : '--Choose State--'
		};
		this.changeProvince = this.changeProvince.bind(this);
		// this.changeState = this.changeState.bind(this);
	}
  
	componentDidMount() {
		this.setState({
			province : [
				{ name: 'تهران',  cities: ['تهران', 'شهریار'] },
				{ name: 'خراسان رضوی', cities: ['نیشابور', 'مشهد'] },
				{ name: 'شیراز', cities: ['مرودشت', 'شیراز'] },
				{ name: 'اصفهان', cities: ['کاشان', 'اصفهان'] },
				{ name: 'تبریز', cities: ['میانه', 'تبریز'] },
				{ name: 'مازندران', cities: ['بابل', 'ساری'] },
				{ name: 'گیلان', cities: ['لاهیجان', 'رشت'] },
				{ name: 'بوشهر', cities: ['گناوه', 'بوشهر'] },
				{ name: 'کرمانشاه', cities: ['جوانرود', 'کرمانشاه'] },
				{ name: 'خوزستان', cities: ['آبادان', 'اهواز'] },
			]
		});
	}
  
	changeProvince(event) {
		console.log(this.state.selectedProvince);
		this.setState({selectedProvince: event.target.value});
		this.setState({cities : this.state.province.find(cntry => cntry.name === event.target.value).cities});
		console.log(this.state.selectedProvince);
		// console.log(selectedProvince);
	}
	
	// changeState(event) {
	// 	this.setState({selectedState: event.target.value});
	// 	const stats = this.state.province.find(cntry => cntry.name === this.state.selectedProvince).states;
	// 	this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
	// }
	
	render() {
		return (
			<div id="container">
				{/* <h2>Cascading or Dependent Dropdown using React</h2> */}
	
				<div>
					{/* <label>Province</label> */}
					<select className="register-input" placeholder="نام استان" value={this.state.selectedProvince} onChange={this.changeProvince}>
					
						<option>نام استان </option>
						{this.state.province.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

				{/* <div>
					<label>State</label>
					<select placeholder="نام شهر" value={this.state.selectedState} onChange={this.changeState}>
						<option>--Choose State--</option>
						{this.state.states.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div> */}
				
				<div>
					{/* <label>City</label> */}
					<select className="register-input" placeholder="نام شهر">
						<option >نام شهر</option>
						{this.state.cities.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
				</div>
			</div>
		)
	}
}

export default Dropdown;