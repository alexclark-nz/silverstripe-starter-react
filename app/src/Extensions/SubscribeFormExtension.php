<?php


namespace App\Extensions;


use App\Models\Subscriber;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\ORM\DataExtension;

class SubscribeFormExtension extends DataExtension
{
    private static $allowed_actions = [
        'Subscribe'
    ];

    public function Subscribe(HTTPRequest $request)
    {
        $data = json_decode($request->getBody());

        $errors = [];
        foreach (['FirstName', 'Surname', 'Email'] as $field)
        {
            if (empty($data->$field)) {
                $errors[] = "The {$field} field is required";
            }
        }

        if (count($errors) > 0) {
            return json_encode([
                'errors' => $errors
            ]);
        }

        $existing = Subscriber::get()->filter('Email', $data->Email)->first();

        if ($existing) {
            return json_encode([
                'errors' => ['User is already subscribed.']
            ]);
        }

        $subscriber = Subscriber::create([
            'FirstName' => $data->FirstName,
            'Surname' => $data->Surname,
            'Email' => $data->Email,
        ]);

        $subscriber->write();

        return json_encode($subscriber->ID);
    }
}
