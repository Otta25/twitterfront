import React from 'react'

function ToFollow({user}) {
  return (
    <div class="p-2 w-100">
    <div class="my-3">
        <div class="col">
           <div class="d-flex align-items-center ms-1">
             <img class="me-3 p-1" src="/img/avatarSmall.svg" alt="" srcset="" />
                <div>
                  <p class="mb-0 fw-bold">{user.username}</p>
                  <p class="mb-0 font-grey">@{user.username}</p>
                </div>
                <div class="ms-auto me-2">
                  <form id="follow-form" action="/usuarios/following/unfollow" method="POST">
                    
                    <button type="submit" class="btn ms-auto me-1 rounded-pill btn-skyblue">Unfollow</button>
                  </form>
                </div>
            </div>
        </div>     
    </div>      
</div>
  )
}






export default ToFollow