import Head from 'next/head'
import Image from 'next/image'
import ServiceCard from '../components/serviceCard'
import { intropic } from '../public/vercel.svg'





export default function Home() {
  return (
    <div>

      <div className='future-container'>
        <div className='future-text-image-container-wrapper'>
          <div className='future-text-image-container'>
            <div style={{ maxWidth: '700px', padding: '20px' }} className='future-text-text-container'>
              <h2><mark>What is Ecommerce?</mark></h2>
              <p>
                Ecommerce, also known as electronic commerce or internet commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions. Ecommerce is often used to refer to the sale of physical products online, but it can also describe any kind of commercial transaction that is facilitated through the internet.
              </p>
              <p>
                The history of ecommerce begins with the first ever online sale: on the August 11, 1994 a man sold a CD by the band Sting to his friend through his website NetMarket, an American retail platform. This is the first example of a consumer purchasing a product from a business through the World Wide Web—or “ecommerce” as we commonly know it today.
              </p>
              <p>
                Since then, ecommerce has evolved to make products easier to discover and purchase through online retailers and marketplaces.  Independent freelancers, small businesses, and large corporations have all benefited from ecommerce, which enables them to sell their goods and services at a scale that was not possible with traditional offline retail.
              </p>
            </div>
          </div>
          <div className='future-text-image-container'>
            <div style={{ maxWidth: '700px', padding: '20px' }} className='future-text-text-container'>
              <h2><mark>Benifits of Ecommerce</mark></h2>
              <ol style={{ padding: '0px' }}>
                <li>
                  <mark id='listtype'>Overcome Geographical Limitations
                  </mark>
                  <h4>If you have a physical store, you are limited by the geographical area that you can service. With an e-commerce website, the whole world is your playground.
                    Additionally, the advent of m-commerce, i.e., e-commerce on mobile devices, has dissolved every remaining limitation of geography.
                  </h4>
                </li>

                <li>
                  <mark id='listtype'>Gain New Customers with Search Engine Visibility
                  </mark>

                  <h4>Physical retail is driven by branding and relationships. In addition to these two drivers, online retail is also driven by traffic from search engines. It is not unusual for customers to follow a link in search engine results and land on an e-commerce website that they have never heard of. This additional source of traffic can be the tipping point for some e-commerce businesses. </h4>
                </li>
                <li>
                  <mark id='listtype'> Eliminate Travel Time and Cost
                  </mark>
                  <h4>It is not unusual for customers to travel long distances to reach their preferred physical store. E-commerce allows them to visit the same store virtually, with just a few mouse clicks.</h4>
                </li>
                <li>
                  <mark id='listtype'>Remain Open All the Time
                  </mark>
                  <h4>Store timings are now 24/7/365. E-commerce websites can run all the time. From the merchant's point of view, this increases the number of orders they receive. From the customer's point of view, an "always open" store is more convenient. </h4>
                </li>
                <li>
                  <mark id='listtype'>Create Markets for Niche Products
                  </mark>
                  <h4>Buyers and sellers of niche products can find it difficult to locate each other in the physical world. Online, it is only a matter of the customer searching for the product in a search engine. One example could be the purchase of obsolete parts. Instead of trashing older equipment for lack of spares, today we can locate parts online with great ease.</h4>
                </li>
                <li>
                  <mark id='listtype'>Provide Abundant Information
                  </mark>
                  <h4>There are limitations to the amount of information that can be displayed in a physical store. It is difficult to equip employees to respond to customers who require information across product lines. E-commerce websites can make additional information easily available to customers. Most of this information is provided by vendors and does not cost anything to create or maintain. </h4>
                </li>
              </ol>
            </div>
          </div>

          <div className='future-text-image-container'>
            <div style={{ maxWidth: '700px', padding: '20px' }} className='future-text-text-container'>
              <h2><mark>The Future</mark></h2>
              <p>
                he ecommerce industry is expected to grow by almost $11 trillion between 2021 and 2025. As businesses came online during the COVID-19 pandemic, the global trend toward digitization surged ahead at lightning speed. Even as regions begin to reopen, ecommerce growth keeps climbing. Global ecommerce sales are expected to reach $5 trillion in 2022, and $6 trillion by 2024.
              </p>
              <p>
                Merchants continue to follow consumer demand online, flocking to ecommerce in record numbers. Online stores are popping up daily, with an estimated 12–24 million ecommerce sites across the globe. This ecommerce growth means more brands competing for customers. As a result, digital advertising is more costly and less lucrative than ever before.
              </p>
              <p>
                A quote from The Art of War, China's monumental treatise on warfare goes like this: <mark>"Know the enemy and know yourself"</mark>  in a hundred battles you will never be in peril."
              </p>
            </div>
          </div>


          <div className='future-text-image-container'>
            <img alt='none' style={{ maxWidth: '400px', maxHeight: 'none' }} className='future-text-image-image' src='./chart.svg'></img>
            <div style={{ maxWidth: '100%' }} className='future-text-text-container'>
              <p style={{ textAlign: 'center', paddingTop: 0, marginTop: '0', color: 'gray' }}>Retail ecommerce sales worldwide from 2014</p>
            </div>
          </div>
        </div>
      </div>
      <div className='services-container'>
        <div className='service-container-wrapper'>
          <ServiceCard title='Easy to manage' />
          <ServiceCard title='100% secure' />
          <ServiceCard title='Easy access' />
        </div>
      </div>
    </div>

  )
}
