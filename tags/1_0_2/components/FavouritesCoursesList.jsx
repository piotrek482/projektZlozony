const FavouritesCoursesList = ({list}) => (
	<div>
		<h1> Przeczytane posty </h1>
		<hr />
		<div>
			{list.length == 0? <p className="text-center">Brak postów </p> : null }
			{list.map((data) => <Course data={data} key={data.id} Details={CourseDetails}>
			

		  		{/* Course Actions */}
				<div className="btn-group pull-right">
					<FavButton active={AppState.state.favourites_map[data.id]}
								onActivate={()=>actions.addFavourite(data.id)} 
								onDeactivate={()=>actions.removeFavourite(data.id)}  />
				</div>
			</Course>)}
		</div>
	</div>
)