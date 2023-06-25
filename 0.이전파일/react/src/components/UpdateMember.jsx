import React from 'react'

const UpdateMember = () => {
  return (
    <div>
        <h3>회원정보 수정하기</h3>
        <form>
            <input type="password" placeholder='현재 비밀번호를 입력하세요'></input>
            <input type="radio" name="gender" value="man"></input>남성
            <input type="radio" name="gender" value="woman"></input>여성
            <span>태어난 연도</span>
            <select>
                <option></option>

            </select>

        </form>

    </div>
  )
}

export default UpdateMember