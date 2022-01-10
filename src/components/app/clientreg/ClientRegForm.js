const ClientRegForm = () => {
	return (
		<div id="formreg">
			<form>  
				<label> Firstname </label>         
				<input type="text" name="firstname" size="15"/> <br /> <br />

				<label> Middlename: </label>     
				<input type="text" name="middlename" size="15"/> <br/><br/> 

				<label> Lastname: </label>         
				<input type="text" name="lastname" size="15"/><br/><br/>  
  
				<br/>  
				<label>   
					Gender :  
				</label>
				<br/>

				<input type="radio" name="male"/> Male <br/>  
				<input type="radio" name="female"/> Female <br/>
				<input type="radio" name="other"/> Other 
				<br/>
  
				<label>
					Phone :
				</label> 
				<input type="text" name="country code"  value="829" size="2"/>   
				<input type="text" name="phone" size="10"/> <br/>
				Address  
				<br/>

				<textarea cols="80" rows="5" value="address">  
				</textarea>
				<br/>

				Email:  
				<input type="email" id="email" name="email"/> <br/>
				<br/>
				Password:  
				<input type="Password" id="pass" name="pass"/> <br/>
				<br /> <br />  
				Re-type password:  
				<input type="Password" id="repass" name="repass"/> <br/>
				<input type="button" value="Submit"/>
			</form>
		</div>
	);
};

export default ClientRegForm;
