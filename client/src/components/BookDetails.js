import React from 'react';
import {graphql} from 'react-apollo';
import {getOneBookQuery} from '../queries/queries';

class BookDetails extends React.Component{
    displayBookDetails(){
        const {book} = this.props.data;
        if(book){
            return(
                <div>
                    <h2>{book.name}</h2>
                    <p><strong>Genre:</strong> {book.genre}</p>
                    <p><strong>Author:</strong>  {book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {
                            book.author.books.map(item => {
                                return(
                                    <li key={item.id}>{item.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }
        else{
            return (<div>No book selected</div>)
        }
    };

    render(){
        

        return(
            <div id="book-details">
                {this.displayBookDetails()}
            </div>
        );
    }
}

export default graphql(getOneBookQuery, {
    options: (props)=>{
        return{
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);