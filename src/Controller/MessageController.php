<?php

namespace BackboneTodo\Controller;

use Illuminate\Database\Query\Builder;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

/**
 * Controller to handle managing messages by API
 *
 * @package BackboneTodo\Controller
 * @author  Lukasz Lewandowski <luklewluk@gmail.com>
 */
class MessageController
{
    /** @var Builder Message Table */
    protected $table;

    /**
     * Constructor
     *
     * @param Builder $table Eloquent Message table
     */
    public function __construct(Builder $table)
    {
        $this->table = $table;
    }

    /**
     * Return all messages
     */
    public function listAction(Request $request, Response $response, $args)
    {
        $messages = $this->table->get();
        $response->getBody()->write(json_encode($messages));

        return $response;
    }
}
