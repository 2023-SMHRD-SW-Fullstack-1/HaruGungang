import React from 'react'

const DeleteMember = () => {
  return (
    <div>
        <h3>회원 탈퇴</h3>
        <form>
            <input type="password" placeholder='비밀번호를 입력하세요'></input>
            <input type="password" placeholder='비밀번호 확인'></input>
            <input type="submit" value="회원 탈퇴하기"></input>
        </form>
    </div>
  )
}

export default DeleteMember