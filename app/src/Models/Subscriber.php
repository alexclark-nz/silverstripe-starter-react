<?php


namespace App\Models;


use SilverStripe\Forms\EmailField;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\ORM\DataObject;

class Subscriber extends DataObject
{
    private static $db = [
        'FirstName' => 'Varchar(255)',
        'Surname' => 'Varchar(255)',
        'Email' => 'Varchar(255)',
    ];

    private static $table_name = 'Subscriber';

    private static $summary_fields = [
      'FirstName' => 'First name',
      'Surname' => 'Last name',
      'Email' => 'Email address',
    ];

    public function getCMSFields()
    {
        return FieldList::create([
           TextField::create('FirstName'),
           TextField::create('Surname'),
           EmailField::create('Email'),
        ]);
    }
}
