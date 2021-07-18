import React from 'react'

const BookStore = ({results}) => {
    return (
        <div>
            {
                results.map(book => (
                    <div>{book.volumeInfo.title}</div>
                ))
            }
        </div>
    )
}

export default BookStore
