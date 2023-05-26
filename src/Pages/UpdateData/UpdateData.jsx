import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import useTitle from '../../Hook/UseTitle';


const UpdateData = () => {
    useTitle('PlayfulParadise | Update Data')
    const update = useLoaderData()

    const { _id, photo, ProductName, sellerEmail, sellerName, subCategory, price, rating, quantity, description } = update

    console.log(update)
    const { user } = useContext(AuthContext)

    const handleUpdateToys = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const ProductName = form.name.value;
        const sellerName = user.displayName
        const email = user.email
        const subCategory = form.subCategory.value;
        const price = parseFloat(form.price.value);
        const rating = form.rating.value;
        const quantity = parseFloat(form.quantity.value);
        const description = form.description.value;


        const updatedToys = { photo, ProductName, subCategory, price, rating, quantity, description }




        fetch(`https://ass-11-toys-server.vercel.app/allToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK!'
                    })
                }
            })


    }
    //console.log(user.displayName)

    return (
        <div>
            <div className='px-5 md:mx-52 mt-20 mb-20'>
            <form onSubmit={handleUpdateToys} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photo"
                            value="Photo url"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="text"
                        name='photo'
                        required={true}
                        defaultValue={photo}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="productName"
                            value="Product Name"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="text"
                        name='name'
                        required={true}
                        defaultValue={ProductName}
                    />
                </div>

                <div>
                    <Label htmlFor="disabledInput2">
                        Seller Name
                    </Label>
                    <TextInput
                        type="text"
                        id="disabledInput2"
                        placeholder={user?.displayName}
                        disabled={true}
                        readOnly={true}
                        
                    />
                </div>
                <div>
                    <Label htmlFor="disabledInput2">
                        Seller Email
                    </Label>
                    <TextInput
                        type="text"
                        id="disabledInput2"
                        placeholder={user?.email}
                        disabled={true}
                        readOnly={true}
                    />
                </div>

                {/* <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="Sub-category"
                            value="Sub-category"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="text"
                        name='subCategory'
                        required={true}
                    />
                </div> */}
                <div id="select">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="Sub-category"
                            value="Sub-category"
                        />
                    </div>
                    <Select
                        id="countries"
                        type="text"
                        name='subCategory'
                        required={true}
                        defaultValue={subCategory}
                    >
                        <option>
                        SportsCar
                        </option>
                        <option>
                        RegularCar
                        </option>
                        <option>
                        Truck
                        </option>
                        
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="price"
                            value="Price"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="text"
                        name='price'
                        required={true}
                        defaultValue={price}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="rating"
                            value="Rating"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="text"
                        name='rating'
                        required={true}
                        defaultValue={rating}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="quantity"
                            value="Available quantity"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="text"
                        name='quantity'
                        required={true}
                        defaultValue={quantity}
                    />
                </div>
                {/* <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="description"
                            value="Detail description"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="text"
                        name='description'
                        required={true}
                    />
                </div> */}
                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="description"
                            value="Detail Description"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        type="text"
                        name='description'
                        placeholder='Type Detail'
                        required={true}
                        rows={4}
                        defaultValue={description}
                    />
                </div>


                {/* <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        name='email'
                        placeholder="name@flowbite.com"
                        required={true}
                    />
                </div> */}

                <Button type="submit">
                    Update
                </Button>
            </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateData;