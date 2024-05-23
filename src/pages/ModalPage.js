import { useState } from "react";
import Modal from "../components/Modal";
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const modalMesage = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend, ligula ut posuere elementum, ex metus dapibus diam, id mollis elit turpis eget lacus. Donec sit amet auctor enim. Morbi venenatis tincidunt libero. </p> ;

    const actionBar = <Button
        primary
        rounded
        onClick={handleClose}
    >
        Accept Terms
    </Button>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>{modalMesage}</Modal>;

    return <div className="pb-5">
        <Button onClick={handleOpen} primary rounded>
            Show Modal
        </Button>

        {showModal && modal}







        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
            in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
            tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
            commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
            pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
            dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
            condimentum viverra scelerisque sit amet elit. Mauris eget nunc
            sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
            risus lorem.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
            in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
            tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
            commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
            pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
            dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
            condimentum viverra scelerisque sit amet elit. Mauris eget nunc
            sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
            risus lorem.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
            in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
            tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
            commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
            pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
            dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
            condimentum viverra scelerisque sit amet elit. Mauris eget nunc
            sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
            risus lorem.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
            in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
            tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
            commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
            pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
            dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
            condimentum viverra scelerisque sit amet elit. Mauris eget nunc
            sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
            risus lorem.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
            in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
            tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
            commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
            pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
            dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
            condimentum viverra scelerisque sit amet elit. Mauris eget nunc
            sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
            risus lorem.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
            in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
            tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
            commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
            pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
            dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
            condimentum viverra scelerisque sit amet elit. Mauris eget nunc
            sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
            risus lorem.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
            in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
            tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
            commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
            pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
            dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
            condimentum viverra scelerisque sit amet elit. Mauris eget nunc
            sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
            risus lorem.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
            in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
            tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
            commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
            pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
            dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
            condimentum viverra scelerisque sit amet elit. Mauris eget nunc
            sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
            risus lorem.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
            in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
            tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
            commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
            pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
            dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
            condimentum viverra scelerisque sit amet elit. Mauris eget nunc
            sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
            risus lorem.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat elit
            in est interdum fermentum. Cras vehicula a urna sit amet auctor. Mauris
            tempor magna a imperdiet posuere. Quisque quis malesuada felis, sit amet
            commodo mi. Vestibulum finibus suscipit porta. Donec a enim ac eros
            pellentesque efficitur. In ut ex enim. Cras lacinia quam id urna
            dapibus, a consequat mauris posuere. Etiam sed erat quis lacus
            condimentum viverra scelerisque sit amet elit. Mauris eget nunc
            sagittis, dapibus risus pharetra, placerat neque. Maecenas tristique
            risus lorem.
        </p>


        <Button onClick={handleOpen} primary rounded>
            Show Modal
        </Button>

    </div>



}

export default ModalPage;