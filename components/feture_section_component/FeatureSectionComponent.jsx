import Feature from "./feature_section_ui_components/FeatureComponent"
export default function FeatureSection({featuresToShow}) {

    const featureList = [
        {
            'link':'/assets/features/desktop/responsive.svg',
            'iconWidth': 72,
            'iconHeight': 72,
            'title': '100% Responsive',
            'description': 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.'
        },
        {
            'link':'/assets/features/desktop/no-limit.svg',
            'iconWidth': 72,
            'iconHeight': 36,
            'title': 'No Photo Upload Limit',
            'description': 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.'
        },
        {
            'link':'/assets/features/desktop/embed.svg',
            'iconWidth': 71,
            'iconHeight': 72,
            'title': 'Available to Embed',
            'description': 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. '
        },
        {
            'link':'/assets/features/desktop/custom-domain.svg',
            'iconWidth': 81,
            'iconHeight': 72,
            'title': 'Custom Domain',
            'description': 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!'
        },
        {
            'link':'/assets/features/desktop/boost-exposure.svg',
            'iconWidth': 71,
            'iconHeight': 72,
            'title': 'Boost Your Exposure',
            'description': 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.'
        },
        {
            'link':'/assets/features/desktop/drag-drop.svg',
            'iconWidth': 91,
            'iconHeight': 72,
            'title': 'Drag & Drop Image',
            'description': 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.'
        },
    ]

    const componentList = featureList.slice(0,featuresToShow).map((item, index) => {
        return <Feature key={index} icon={item.link} iconWidth={item.iconWidth} iconHeight={item.iconHeight} title={item.title} description={item.description}/>
    })


    return (
        <div className={`flex flex-col items-center justify-center py-16 text-center ${componentList.length > 3 ? ' md:mx-auto md:grid md:grid-cols-2 xl:grid-cols-3': '' }  xl:flex-row`}>
            {componentList}
        </div>
    )
}