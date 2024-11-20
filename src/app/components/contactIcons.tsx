interface contactData {
    type: string,
    link: string,
    icon: JSX.Element
}

interface contactProps {
    contact: contactData[]
}

const ContactIcons = ({ contact }: contactProps) => {
    return <div className="flex gap-5">{
        contact.map((cont, index) =>
            <div key={index} className="text-2xl">
                <a
                    href={cont.link}
                    target="_blank"
                    rel="noopener noreferrer"
                ><span>{cont.icon}</span>
                </a>
            </div>
        )
    }
    </div>
}

export default ContactIcons