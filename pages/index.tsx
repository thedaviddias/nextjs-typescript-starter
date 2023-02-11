import { GetStaticPropsContext, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
  return (
    <main>
      <div className="md:flex">
        <h1>Welcome to next</h1>
        <p className="mt-2 text-gray-600">
          Getting a new business off the ground is a lot of hard work. Here are five
          ideas you can use to find your first customers.
        </p>
      </div>
    </main>
  )
}

export default Home

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const locale = context.locale || context.defaultLocale || 'en'

  const translations = await serverSideTranslations(locale, ['common'])

  return { props: { ...translations } }
}
