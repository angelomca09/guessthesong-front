export default function Footer() {

    return (
        <footer className="container pb-4 flex justify-center">
            <small className="text-slate-500">
                <span>Developed by </span>
                <a target="_blank" className="no-underline" href="https://github.com/josermca01">@josermca01</a>
                <span> and </span>
                <a target="_blank" className="no-underline" href="https://github.com/angelomca09">@angelomca09</a>
                <span> • </span>
                <span>Data and samples from: </span>
                <a className='text-purple-600 hover:text-purple-500 inline-flex w-fit gap-1 items-center no-underline' target='_blank' href="https://www.deezer.com/">
                    DEEZER <img className='h-3' src="https://e-cdn-files.dzcdn.net/cache/images/common/favicon/favicon-32x32.ed120c279a693bed3a44.png" alt="Deezer logo" />
                </a>
            </small>
        </footer>
    )
}