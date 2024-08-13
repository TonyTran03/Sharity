'use client'


export default function LandingNav(){
   

  
    return(
        <nav className="navbar w-full flex justify-between items-center glass ">
            
            <div className="flex-1"></div> {/* This will push the Sign In button to the right */}
      
      <div className="dropdown dropdown-end">
        <a className="btn btn-primary btn-sm sm:btn-md md:btn-lg">
          Sign In
        </a>
      </div>
    </nav>
    );
}
