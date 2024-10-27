import {
    Modal,
    ModalBody,
    ModalContent,
    ModalTrigger
} from "./AnimatedModal"
import VideoCarousel from "./VideoCarousel"

const ProjectModal = () => {
    return (
        <div>
            <Modal>
                <ModalTrigger /> 
                <ModalBody>
                    <ModalContent>
                        <VideoCarousel />
                    </ModalContent>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ProjectModal
