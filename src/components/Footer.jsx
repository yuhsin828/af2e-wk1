export default function Footer() {
    return (
        <div>
            <article className="description__layout py-4 py-sm-5">
                <div className="container d-flex flex-column align-items-center">
                    <h1>DESCRIPTIONS</h1>
                    <hr className="divider--light" />
                    <p className="text-justify description__content py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
                        corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam
                        unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione
                        ullam
                        eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda
                        quod
                        quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias
                        dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi
                        tempora.
                        Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat
                        repudiandae temporibus! Saepe excepturi tempore iusto eos sit!</p>
                </div>
            </article>
            <footer className="footer">
                <div className="footer__above py-5">
                    <div className="container">
                        <div className="row my-3">
                            <h5 className="footer__description col-lg-8">
                                臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
                            </h5>
                            <ul className="footer__list col-lg-4">
                                <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-google-plus-g"></i></a></li>
                                <li className="footer__item"><a href="" className="footer__link"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer__below">
                    <div className="container">
                        <h6>
                            &copy; Copyright All rights reserved.
                        </h6>
                    </div>
                </div>
            </footer>
        </div>
    );
}