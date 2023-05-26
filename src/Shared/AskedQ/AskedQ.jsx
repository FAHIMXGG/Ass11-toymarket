import { Accordion } from 'flowbite-react';
import React from 'react';

const AskedQ = () => {
    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="bottom-center" className='lg:mx-28 mb-20 mx-5'>
            <div className='text-center font-semibold text-2xl mb-10'>
                <h1 className='mb-3 font-mono'>Frequently Asked Questions</h1>
                <div className='flex justify-center'>
                    <hr className='border-1 w-3/12 border-cyan-400' />
                </div>
            </div>
            <div>

                <Accordion>
                    <Accordion.Panel>
                        <Accordion.Title>
                            How much for shipping?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Standard shipping fee of $5 for all orders within your country and $15 for international orders. However, please note that actual shipping costs may vary depending on the factors mentioned earlier. It is important to research and determine the most appropriate shipping rates for your specific business needs.
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            How do my cancel my subscriptions?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Log in to your account on our toy website.
                                Navigate to the "Account" or "Subscription" section.
                                Look for the option to manage your subscriptions.
                                Find the specific subscription you wish to cancel.
                                Click on the cancellation or unsubscribe button next to that subscription.
                                Follow any additional prompts or instructions provided to confirm the cancellation.
                                You may receive a confirmation email or notification stating that your subscription has been canceled.
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Will I be cancel at any time?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Yes, you can cancel your subscription at any time. We offer a flexible cancellation policy that allows you to end your subscription whenever you choose. Whether you want to cancel after the first month or several months into your subscription, you have the freedom to do so. Simply follow the cancellation process outlined on our toy website or contact our customer support team, and we will assist you in canceling your subscription promptly. Please note that any remaining subscription period will still be honored, and you will have access to the benefits until the cancellation takes effect.
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    );
};

export default AskedQ;