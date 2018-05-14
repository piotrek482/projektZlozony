const CourseDetails = ({data}) => (
	<div>
	  	<table className="table course_details">
	  		<tbody>
	  			<tr>
	  				<th>Ocena</th>
	  				<td>
	  					<Rating max={5} value={3} />
	  				</td>
		  		</tr>
		  		<tr>
		  			<th>Autor</th>
		  			<td>{data.author}</td>
	  			</tr>
		  		<tr>
		  			<th>Data dodania</th>
		  			<td>{data.duration}</td>
	  			</tr>
		  		<tr>
		  			<th>Tag</th>
		  			<td>{data.categories} </td>
	  			</tr>
	  		</tbody>
	  	</table>
		<CartButton course={data}/>
	</div>
)

const CourseMedia = ({data}) => ( <img src={data.image} alt="cover" />)

const NewLabel = ({data}) => ( data.is_new? <span className="label label-default">Nowy post!</span> : null)


const Course = (props) => {
	const {data, Details} = props;

	return (
	  	<div className="media course">

	  		{/* Course media column */}
	  		<div className="media-left">
	  			<CourseMedia {...props} />
	  		</div>

	  		{/* Course content column */}
	  		<div className="media-body">
		  		<h3>{data.title} <NewLabel {...props} /></h3>
	  			<p>{data.description}</p>

		  		{props.children}
	  		</div>

		  	{/* Course details column */}
		  	{Details?
		  		<div className="media-right">
		  			<Details {...props} />
			  	</div> : null
			}
		</div>
	)
}