const CoursesSearch = React.createClass({

	getInitialState: function(){
		return {
			'query': '',
			'filtered_list':[]
		}
	},

	filterList: function(event){

		event.persist();

		console.log(event)

		clearTimeout(this.pending);

		this.pending = setTimeout(()=>{
			let query = event.target.value;

			this.setState({
				filtered_list: this.props.courses.filter((course) => (
					query.length >= 3 &&
					(  course.title.toLowerCase().includes(query.toLowerCase()) 
					|| course.description.toLowerCase().includes(query.toLowerCase())
					|| course.author.toLowerCase().includes(query.toLowerCase())
					)
				))
			})
		},500)

	},

	render: function(){
		return <div>
			<input type="text" className="form-control" onChange={this.filterList} placeholder="Filtruj listę postów" />
			<hr/>
			<div className="list-group">
				{this.state.filtered_list.map((course)=>(
					<a href="#" key={course.id} className="list-group-item">
						<h3 className="list-group-item-heading"> {course.title} </h3>
						<h4 className="list-group-item-text"> {course.author} </h4>
						<p className="list-group-item-publishing-date"> {course.duration} </p>
						<div className="textContent clearfix">
						<div className="list-group-item-image pull-left"><img src={course.image} /> </div>
						<p className="list-group-item-desc"> {course.description} </p>
					</div>
					</a>
				))}
			</div>
		</div>
	}
})

const App = React.createClass({

	getInitialState: function(){
		return this.props.store.state;
	},

	componentDidMount: function(){
		this.props.store.addListener((state) => {
			this.setState({
				page: state.page,
				courses_list: state.courses_list,
				favourites_list: state.favourites_list,
				activeTab: state.activeTab
			})
		})
	},

	render: function(){
		return (
		  <div>
		    <div className="container">
		      <Nav onChange={actions.navigateTo} activeTab={this.state.activeTab} ></Nav>
		      <div className="row">
		        <div className="col-xs-12">
		        </div>
		      </div>
		      <div className="row">
		        <div className="col-xs-12">
		        	<Tabs activeTab={this.state.activeTab}>
						<TabPanel name="Wyszukiwarka">
							<h1> Wyszukiwarka postów </h1>
							<hr/>
							<CoursesSearch courses={this.state.courses_source}></CoursesSearch>
						</TabPanel>
						<TabPanel name="Obserwowane">
							<ShoppingCartList list={this.state.cart_list} /> 
						</TabPanel>
						<TabPanel name="Przeczytane">
							<FavouritesCoursesList list={this.state.favourites_list} />
						</TabPanel>
						<TabPanel name="Posty">
							<CoursesList list={this.state.courses_list} />
		          			<hr />
		          			<button className="btn btn-default btn-block" onClick={this.props.actions.loadMore}> Pokaż więcej ... </button>
						</TabPanel>
		        	</Tabs>
		        </div>
		      </div>
		    </div>
		    <footer className="footer">
		      <div className="container">
		        <p> </p>
		      </div>
		    </footer>
		  </div>
		)
	}
})
